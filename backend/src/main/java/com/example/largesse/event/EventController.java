package com.example.largesse.event;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/event")
public class EventController {

    private EventService eventService;

    @Autowired
    EventController(EventService eventService) {
        this.eventService = eventService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<Event> getEvent(@PathVariable Long id) {
        Event e = eventService.getEvent(id);
        if (e != null) {
            return ResponseEntity.status(200).body(e);
        }
        return ResponseEntity.status(404).build();
    }

    @GetMapping
    public List<Event> getEvents() {
        return eventService.getEvents();
    }

    @GetMapping("/category/{category}")
    public List<Event> getEventsByCategory(@PathVariable String category) {
        return eventService.getEventsByCategory(category);
    }

    @PostMapping
    public ResponseEntity<Void> postEvent(@RequestBody Event event) {
        Long id = eventService.postEvent();
        if (id > 0) {
            return ResponseEntity.status(201).header("Location", "http://localhost:8080/event/" + id.toString())
                    .build();
        }
        return ResponseEntity.status(500).build();

    }

    @GetMapping("/categories")
    public List<String> getCategories() {
        return eventService.getCategories();
    }

}
