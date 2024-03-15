FROM eclipse-temurin:21-jdk as build
WORKDIR /opt/app

COPY .mvn .mvn
COPY mvnw .
COPY pom.xml .
COPY src ./src
RUN ./mvnw package -DskipTests
RUN java -Djarmode=layertools -jar target/*.jar extract

FROM eclipse-temurin:21-jre-alpine

RUN addgroup -g 1001 oauth && adduser -u 1001 -G oauth -D oauth
USER oauth:oauth
WORKDIR /home/oauth

COPY --chown=oauth:oauth --from=build /opt/app/dependencies/ .
COPY --chown=oauth:oauth --from=build /opt/app/spring-boot-loader/ .
COPY --chown=oauth:oauth --from=build /opt/app/snapshot-dependencies/ .
COPY --chown=oauth:oauth --from=build /opt/app/application/ .

ARG PORT=8080
EXPOSE $PORT

ENTRYPOINT ["sh", "-c", "java ${JAVA_OPTS} org.springframework.boot.loader.launch.JarLauncher ${0} ${@}"]
