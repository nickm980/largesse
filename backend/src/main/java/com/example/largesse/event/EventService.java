package com.example.largesse.event;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.largesse.event.exceptions.EventNotFoundException;

@Service
public class EventService {

    private EventRepository eventRepository;

    @Autowired
    public EventService(EventRepository eventRepository) {
        this.eventRepository = eventRepository;
    }

    public Event getEvent(Long id) {
        Optional<Event> optionalEvent = eventRepository.findById(id);
        if (optionalEvent.isPresent()) {
            return optionalEvent.get();
        } else {
            throw new EventNotFoundException("Event not found for ID: " + id);
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
