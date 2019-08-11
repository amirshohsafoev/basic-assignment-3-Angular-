import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  visiblity = "hidden";
  count = [0];
  change = "";

  getColor() {
    if (this.count[this.count.length - 1] > 5) {
      this.change = "super";
      return "blue";
    }
  }

  onDisplay() {
    this.visiblity === "hidden"
      ? (this.visiblity = "inline")
      : (this.visiblity = "hidden");
    this.count.push(this.count[this.count.length - 1] + 1);
    console.log(this.count);
  }
}
