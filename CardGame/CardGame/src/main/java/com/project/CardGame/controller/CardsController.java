package com.project.CardGame.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.beans.factory.annotation.Autowired;

import com.project.CardGame.model.DeckOfCards;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class CardsController {
	
	@Autowired
	private DeckOfCards deck;

	@GetMapping("/random-suits")
	public @ResponseBody String[] getRandomOrderSuits() {
		return deck.getRandomOrderSuits();
	}
	
	@GetMapping("/random-values")
	public @ResponseBody String[] getRandomOrderValues() {
		return deck.getRandomOrderValues();
	}
	
	@GetMapping("/random-hand")
	public @ResponseBody String[] getRandomHand() {
		return deck.getRandomHand(10);
	}
}
