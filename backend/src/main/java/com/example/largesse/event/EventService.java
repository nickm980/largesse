package com.example.largesse.event;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.largesse.event.exceptions.EventNotCreatedException;
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

    public Long postEvent(Event event) {
        if (eventRepository.save(event).equals(event)) {
            return event.getId();
        } else {
            throw new EventNotCreatedException("Event either malformed or couldn't be created");
        }
    }
}
