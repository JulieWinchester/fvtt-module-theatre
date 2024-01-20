export class TheatreDialog extends Application {
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
        id: "theatre-dialog",
        width: 300,
        template: "modules/theatre/templates/theatre_dialog.hbs",
        title: "Theatre.UI.Title.TheatreDialogControl",
    });
  }

  activateListeners($html) {
    const html = $html[0];
    html?.appendChild(Theatre.instance.theatreEmoteMenu);
    
    html?.appendChild(Theatre.instance.theatreControls);
    html?.appendChild(Theatre.instance.theatreControlButtons);
  }
}