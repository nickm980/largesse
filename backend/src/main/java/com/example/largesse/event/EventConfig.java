package com.example.largesse.event;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class EventConfig {
    @Bean
    CommandLineRunner commandLineRunner(EventRepository eventRepository) {
        return args -> {
            eventRepository
                    .save(new Event("title1", "place1", "organizer1", "organization1", "address1", "category1",
                            "description1"));
            eventRepository
                    .save(new Event("title2", "place2", "organizer2", "organization2", "address2", "category2",
                            "description2"));
        };
    }
}
