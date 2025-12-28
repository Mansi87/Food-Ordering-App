# Stage 1: Build the Spring Boot application
FROM eclipse-temurin:17-jdk-focal AS builder
WORKDIR /app
# Copy files from Online-Food-Ordering folder
COPY Online-Food-Ordering/mvnw ./mvnw
COPY Online-Food-Ordering/.mvn ./.mvn
COPY Online-Food-Ordering/pom.xml ./pom.xml
COPY Online-Food-Ordering/src ./src
# Make the Maven wrapper script executable.
RUN chmod +x mvnw
# Build the Spring Boot application
RUN ./mvnw clean package -DskipTests

# Stage 2: Runtime
FROM eclipse-temurin:17-jre-focal
WORKDIR /app
COPY --from=builder /app/target/*.jar app.jar
EXPOSE 5454
ENTRYPOINT ["java", "-jar", "app.jar"]