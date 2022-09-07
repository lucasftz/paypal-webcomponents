import { customElement } from "solid-element";
import Button from "./components/Button";

function registerWebComponents() {
  customElement("paypal-button", { color: "gold" }, Button);
}

registerWebComponents();
