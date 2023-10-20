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
            eventRepository.save(new Event("climate title", "climate place", "climate organizer",
                    "climate organization", "climate address", "climate", "climate description"));
            eventRepository.save(new Event("farm title", "farm place", "farm organizer", "farm organization",
                    "farm address", "farm", "farm description"));
            eventRepository.save(new Event("conservation title", "conservation place", "conservation organizer",
                    "conservation organization", "conservation address", "conservation",
                    "conservation description"));
            eventRepository.save(new Event("permaculture title", "permaculture place", "permaculture organizer",
                    "permaculture organization", "permaculture address", "permaculture",
                    "permaculture description"));
            eventRepository.save(new Event("farms title", "farms place", "farms organizer", "farms organization",
                    "farms address", "farms", "farms description"));
            eventRepository.save(new Event("rescue title", "rescue place", "rescue organizer", "rescue organization",
                    "rescue address", "rescue", "rescue description"));
            eventRepository.save(new Event("care title", "care place", "care organizer", "care organization",
                    "care address", "care", "care description"));
            eventRepository.save(new Event("young title", "young place", "young organizer", "young organization",
                    "young address", "young", "young description"));
            eventRepository.save(new Event("education title", "education place", "education organizer",
                    "education organization", "education address", "education", "education description"));
            eventRepository.save(new Event("community title", "community place", "community organizer",
                    "community organization", "community address", "community", "community description"));
            eventRepository.save(new Event("gender title", "gender place", "gender organizer", "gender organization",
                    "gender address", "gender", "gender description"));
            eventRepository.save(new Event("elderly title", "elderly place", "elderly organizer",
                    "elderly organization", "elderly address", "elderly", "elderly description"));
            eventRepository.save(new Event("counseling title", "counseling place", "counseling organizer",
                    "counseling organization", "counseling address", "counseling", "counseling description"));
            eventRepository.save(new Event("holistic title", "holistic place", "holistic organizer",
                    "holistic organization", "holistic address", "holistic", "holistic description"));
            eventRepository.save(new Event("clinics title", "clinics place", "clinics organizer",
                    "clinics organization", "clinics address", "clinics", "clinics description"));
            eventRepository.save(new Event("mental title", "mental place", "mental organizer", "mental organization",
                    "mental address", "mental", "mental description"));
            eventRepository.save(new Event("food title", "food place", "food organizer", "food organization",
                    "food address", "food", "food description"));
            eventRepository.save(new Event("shelters title", "shelters place", "shelters organizer",
                    "shelters organization", "shelters address", "shelters", "shelters description"));
            eventRepository.save(new Event("clothing title", "clothing place", "clothing organizer",
                    "clothing organization", "clothing address", "clothing", "clothing description"));
        };
    }
}
