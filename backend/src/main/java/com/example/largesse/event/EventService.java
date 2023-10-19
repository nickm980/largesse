package com.example.largesse.event;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EventService {

    private EventRepository eventRepository;

    @Autowired
    public EventService(EventRepository eventRepository) {
        this.eventRepository = eventRepository;
    }

    public List<Event> getEvents() {
        return eventRepository.findAll();
    }

    public List<Event> getEventsByCategory(String category) {
        List<Event> events = eventRepository.findAll();
        List<Event> result = new ArrayList<Event>();
        for (Event event : events) {
            if (event.getCategory().equals(category)) {
                result.add(event);
            }
        }
        return result;
    }
}
