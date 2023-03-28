import { Component, OnInit } from '@angular/core';
import { CardGameService } from './services/card-game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  randomSuits!: string[];
  randomValues!: string[];
  randomHand!: string[];
  sortedHand!: string[];

  fullNameValues: { [key: string]: string } = {"T": "10", "J": "Valet", "Q": "Dame", "K": "Roi", "A": "As"};

  constructor(private cardGameService: CardGameService) {}

  ngOnInit() {
  }

  onGetRandomSuits() {
    this.cardGameService.getRandomSuits().subscribe((response) => {
      this.randomSuits = response;
      this.sortedHand = [];
    });
  }

  onGetRandomValues() {
    this.cardGameService.getRandomValues().subscribe((response) => {
      this.randomValues = response;
      this.sortedHand = [];
    });
  }

  onGetRandomHand() {
    this.cardGameService.getRandomHand().subscribe((response) => {
      this.randomHand = response;
      this.sortedHand = [];
    });
  }

  onSortHand() {
    if (!this.randomSuits || !this.randomValues || !this.randomHand) {
      alert("Veuillez générer les couleurs, valeurs et cartes au préalable");
      return;
    }

    if (this.sortedHand && this.sortedHand.length > 0) return;

    const randomHandSuits: { [key: string]: string[] } = {"c": [], "d": [], "h": [], "s": []};

    //séparation des cartes par couleur
    for (const card of this.randomHand) {
      const suit = card[1];
      randomHandSuits[suit].push(card);
    }

    //tri des cartes par valeur
    for (const suit in randomHandSuits) {
      randomHandSuits[suit].sort((nextCard, card) => {
        return this.randomValues.indexOf(nextCard[0]) - this.randomValues.indexOf(card[0]);
      });
    }

    //tri des cartes par couleur
    for (const suit of this.randomSuits) {
      this.sortedHand = this.sortedHand ? [...this.sortedHand, ...randomHandSuits[suit]] : [...randomHandSuits[suit]];
    }

  }

  randomValuesToString() {
    const fullNameValues = [];
    for (let i = 0; i < this.randomValues.length; i++) {
      fullNameValues.push(this.fullNameValues[this.randomValues[i]] ? this.fullNameValues[this.randomValues[i]] : this.randomValues[i]);
    }
    return fullNameValues.join(" / ");
  }

}
