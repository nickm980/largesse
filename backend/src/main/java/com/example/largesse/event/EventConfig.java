package com.example.largesse.event;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class EventConfig {
    @Bean
    CommandLineRunner commandLineRunner(EventRepository eventRepository) {
        return args -> {
            eventRepository.save(new Event("place", "organizer", "organization", "address", "category", "description"));
        };
    }
}
