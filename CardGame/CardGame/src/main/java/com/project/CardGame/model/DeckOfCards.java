package com.project.CardGame.model;

import java.util.Random;

import org.springframework.stereotype.Component;

@Component
public class DeckOfCards {
	private String[] suits = {"c", "d", "h", "s"};
	private String[] values = {"2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K", "A"};

	private String[] fullDeck = {"2c", "3c", "4c", "5c", "6c", "7c", "8c", "9c", "Tc", "Jc", "Qc", "Kc", "Ac",
								 "2d", "3d", "4d", "5d", "6d", "7d", "8d", "9d", "Td", "Jd", "Qd", "Kd", "Ad",
								 "2h", "3h", "4h", "5h", "6h", "7h", "8h", "9h", "Th", "Jh", "Qh", "Kh", "Ah",
								 "2s", "3s", "4s", "5s", "6s", "7s", "8s", "9s", "Ts", "Js", "Qs", "Ks", "As"};

	private String[] randomizeArrayValues(String[] arr) {
		Random rand = new Random();
		
		for (int i = 0; i < arr.length; i++) {
			int randomIndexToSwap = rand.nextInt(arr.length);
			String temp = arr[randomIndexToSwap];
			arr[randomIndexToSwap] = arr[i];
			arr[i] = temp;
		}
		
		return arr;
	}
	
	public String[] getRandomOrderSuits() {
		return randomizeArrayValues(suits);
	}
	
	public String[] getRandomOrderValues() {
		return randomizeArrayValues(values);
	}
	
	public String[] getRandomHand (int cardNumber) {
		String[] randomHand = new String[cardNumber];
		String[] randomFullDeck = randomizeArrayValues(fullDeck);

		for(int i = 0; i < cardNumber; i++) {
			randomHand[i] = randomFullDeck[i];
		}
		
		return randomHand;
	}

}
