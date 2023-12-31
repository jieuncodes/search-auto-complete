import InputBox from "./InputBox.js";
import SelectedLanguage from "./SelectedLanguage.js";

export class App {
  constructor($app) {
    this.state = {
      selection: JSON.parse(localStorage.getItem("selection")) || [],
    };

    this.onSelect = (language) => {
      if (language) {
        alert(language);

        const newSelection = [...this.state.selection];

        const index = newSelection.indexOf(language);
        if (index > -1) {
          newSelection.splice(index, 1);
        }
        newSelection.push(language);

        while (newSelection.length > 5) {
          newSelection.shift();
        }

        localStorage.setItem("selection", JSON.stringify(newSelection));

        this.setState({ selection: newSelection });
        selectedLanguage.setState({ selection: newSelection });
      }
    };

    const selectedLanguage = new SelectedLanguage({
      $app,
      selection: this.state.selection,
      onSelect: this.onSelect.bind(this),
    });

    new InputBox({
      $app,
      selection: this.state.selection,
      onSelect: this.onSelect.bind(this),
    });

    this.setState = (nextState) => {
      this.state = nextState;
    };
  }
}
