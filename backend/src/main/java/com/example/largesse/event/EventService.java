package com.example.largesse.event;

import java.util.ArrayList;
import java.util.HashSet;
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

    public Event getEvent(Long id) {
        try {
            return eventRepository.findById(id).get();
        } catch (Exception e) {
            return null;
        }
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

    public Long postEvent() {
        Event e = new Event();
        if (eventRepository.save(e).equals(e)) {
            return e.getId();
        }
        return -1L;
    }

    public List<String> getCategories() {
        HashSet<String> categories = new HashSet<String>();
        List<Event> events = eventRepository.findAll();
        for (Event event : events) {
            categories.add(event.getCategory());
        }
        List<String> result = new ArrayList<String>(categories);
        return result;
    }
}
