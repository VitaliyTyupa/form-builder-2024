import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {FormioModule} from "@formio/angular";
import {Formio} from "formiojs";
import {NgClass} from "@angular/common";
import {FormBuilderService} from "../services/form-builder.service";

@Component({
  selector: 'app-form-builder-page',
  standalone: true,
  imports: [
    FormsModule,
    FormioModule,
    ReactiveFormsModule,
    NgClass,
  ],
  templateUrl: './form-builder-page.component.html',
  styleUrl: './form-builder-page.component.scss'
})
export class FormBuilderPageComponent implements OnInit {

  @ViewChild('json') jsonElement?: ElementRef;
  public form = {
    id: null,
    metadata: { components: []},
    name: '',
  };
  newFormName = new FormControl('', Validators.required);
  renderOptions = {
    language: 'de',
    i18n: {
      de: {
        // Buttons
        'Submit': 'Einreichen',
        'Save': 'Speichern',
        'Cancel': 'Abbrechen',
        'Next': 'Weiter',
        'Previous': 'Zurück',
        'Remove': 'Entfernen',
        'Add Another': 'Weitere hinzufügen',
        'Are you sure you want to remove this?': 'Sind Sie sicher, dass Sie dies entfernen möchten?',
        'Yes': 'Ja',
        'No': 'Nein',

        // Form elements
        'Display': 'Anzeige',
        'Data': 'Daten',
        'Validation': 'Validierung',
        'API': 'API',
        'Conditional': 'Bedingt',
        'Logic': 'Logik',
        'Layout': 'Layout',
        'Advanced': 'Erweitert',
        'Field': 'Feld',
        'Component': 'Komponente',
        'Key': 'Schlüssel',
        'Type': 'Typ',
        'Label': 'Bezeichnung',
        'Placeholder': 'Platzhalter',
        'Description': 'Beschreibung',
        'Tooltip': 'Tooltip',
        'Prefix': 'Präfix',
        'Suffix': 'Suffix',
        'Widget': 'Widget',
        'Custom CSS Class': 'Benutzerdefinierte CSS-Klasse',
        'Tab Index': 'Tabulatorindex',
        'Hidden': 'Versteckt',
        'Disabled': 'Deaktiviert',
        'Autofocus': 'Autofokus',
        'Multiple Values': 'Mehrere Werte',
        'Default Value': 'Standardwert',
        'Persistent': 'Beständig',
        'Protected': 'Geschützt',
        'Database Index': 'Datenbankindex',
        'Unique': 'Einzigartig',
        'Encrypted (Server Side Only)': 'Verschlüsselt (nur serverseitig)',
        'Redraw On': 'Neu zeichnen bei',
        'Clear Value When Hidden': 'Wert löschen, wenn versteckt',
        'Allow Manual Override of Calculated Value': 'Manuelle Überschreibung des berechneten Werts erlauben',
        'Calculated Value': 'Berechneter Wert',
        'Custom Default Value': 'Benutzerdefinierter Standardwert',
        'Custom Validation': 'Benutzerdefinierte Validierung',
        'Minimum Length': 'Minimale Länge',
        'Maximum Length': 'Maximale Länge',
        'Minimum Value': 'Minimaler Wert',
        'Maximum Value': 'Maximaler Wert',
        'Validate On': 'Validieren bei',
        'Required': 'Erforderlich',
        'Custom Error Message': 'Benutzerdefinierte Fehlermeldung',
        'Show Word Count': 'Wortanzahl anzeigen',
        'Show Character Count': 'Zeichenanzahl anzeigen',
        'Allow Multiple Masks': 'Mehrere Masken erlauben',
        'Date Format': 'Datumsformat',
        'Time Format': 'Zeitformat',
        'Day': 'Tag',
        'Month': 'Monat',
        'Year': 'Jahr',

        // Components
        'Text Field': 'Textfeld',
        'Text Area': 'Textbereich',
        'Number': 'Nummer',
        'Password': 'Passwort',
        'Checkbox': 'Kontrollkästchen',
        'Select Boxes': 'Auswahlkästchen',
        'Select': 'Auswahl',
        'Radio': 'Radio',
        'Button': 'Button',
        'Date/Time': 'Datum/Uhrzeit',
        'Time': 'Zeit',
        'Currency': 'Währung',
        'Survey': 'Umfrage',
        'Signature': 'Unterschrift',
        'File': 'Datei',
        'Container': 'Container',
        'Data Grid': 'Datentabelle',
        'Edit Grid': 'Bearbeitungstabelle',
        'Table': 'Tabelle',
        'Tabs': 'Registerkarten',
        'Panel': 'Panel',
        'Well': 'Rahmen',
        'Columns': 'Spalten',
        'Field Set': 'Feldsatz',
        'HTML Element': 'HTML-Element',
        'Content': 'Inhalt',
        'Email': 'E-Mail',
        'Phone Number': 'Telefonnummer',
        'Address': 'Adresse',
        'Resource': 'Ressource',
        // Other
        'Drag and Drop a file or click to browse.': 'Datei ziehen oder klicken, um zu suchen.',
        'Select a file to upload': 'Wählen Sie eine Datei zum Hochladen aus',
        'Clear': 'Löschen',
        'Edit': 'Bearbeiten',
        'Save Draft': 'Entwurf speichern',
        'Choose an action': 'Aktion auswählen',
        // Formio default notifications\
        'unsavedRowsError': 'Bitte speichern Sie alle Zeilen, bevor Sie fortfahren.',
        'invalidRowsError': 'Bitte korrigieren Sie ungültige Zeilen, bevor Sie fortfahren.',
        'invalidRowError': 'Ungültige Zeile. Bitte korrigieren oder löschen.',
        'alertMessageWithLabel': '{{label}}: {{message}}',
        'alertMessage': '{{message}}',
        'complete': 'Übermittlung abgeschlossen',
        'error': 'Bitte beheben Sie die folgenden Fehler, bevor Sie das Formular absenden.',
        'errorListHotkey': 'Drücken Sie Strg + Alt + X, um zur Fehlerliste zurückzukehren.',
        'errorsListNavigationMessage': 'Klicken Sie, um zum Feld mit folgendem Fehler zu navigieren.',
        'submitError': 'Bitte überprüfen Sie das Formular und beheben Sie alle Fehler vor dem Absenden.',
        'required': '{{field}} ist erforderlich.',
        'unique': '{{field}} muss eindeutig sein.',
        'array': '{{field}} muss ein Array sein.',
        'array_nonempty': '{{field}} muss ein nicht leeres Array sein.',
        'nonarray': '{{field}} darf kein Array sein.',
        'select': '{{field}} enthält eine ungültige Auswahl.',
        'pattern': '{{field}} entspricht nicht dem Muster {{pattern}}.',
        'minLength': '{{field}} muss mindestens {{length}} Zeichen enthalten.',
        'maxLength': '{{field}} darf höchstens {{length}} Zeichen enthalten.',
        'minWords': '{{field}} muss mindestens {{length}} Wörter enthalten.',
        'maxWords': '{{field}} darf höchstens {{length}} Wörter enthalten.',
        'min': '{{field}} darf nicht kleiner als {{min}} sein.',
        'max': '{{field}} darf nicht größer als {{max}} sein.',
        'maxDate': '{{field}} darf kein Datum nach {{- maxDate}} enthalten.',
        'minDate': '{{field}} darf kein Datum vor {{- minDate}} enthalten.',
        'maxYear': '{{field}} darf kein Jahr größer als {{maxYear}} enthalten.',
        'minYear': '{{field}} darf kein Jahr kleiner als {{minYear}} enthalten.',
        'invalid_email': '{{field}} muss eine gültige E-Mail-Adresse sein.',
        'invalid_url': '{{field}} muss eine gültige URL sein.',
        'invalid_regex': '{{field}} entspricht nicht dem Muster {{regex}}.',
        'invalid_date': '{{field}} ist kein gültiges Datum.',
        'invalid_day': '{{field}} ist kein gültiger Tag.',
        'mask': '{{field}} entspricht nicht der Maske.',
        'valueIsNotAvailable': '{{field}} ist ein ungültiger Wert.',
        'stripe': '{{stripe}}',
        'month': 'Monat',
        'year': 'Jahr',
        'january': 'Januar',
        'february': 'Februar',
        'march': 'März',
        'april': 'April',
        'may': 'Mai',
        'june': 'Juni',
        'july': 'Juli',
        'august': 'August',
        'september': 'September',
        'october': 'Oktober',
        'november': 'November',
        'december': 'Dezember',
        'next': 'Weiter',
        'previous': 'Zurück',
        'cancel': 'Abbrechen',
        'submit': 'Formular absenden',
        'confirmCancel': 'Sind Sie sicher, dass Sie abbrechen möchten?',
        'saveDraftInstanceError': 'Entwurf kann nicht gespeichert werden, da keine Form.io-Instanz vorhanden ist.',
        'saveDraftAuthError': 'Entwurf kann nur gespeichert werden, wenn der Benutzer authentifiziert ist.',
        'restoreDraftInstanceError': 'Entwurf kann nicht wiederhergestellt werden, da keine Form.io-Instanz vorhanden ist.',
        'saveDraftError': 'Entwurf konnte nicht gespeichert werden.',
        'restoreDraftError': 'Entwurf konnte nicht wiederhergestellt werden.',
        'time': 'Ungültige Zeitangabe',
        'cancelButtonAriaLabel': 'Abbrechen-Button. Klicken Sie, um das Formular zurückzusetzen.',
        'previousButtonAriaLabel': 'Zurück-Button. Klicken Sie, um zum vorherigen Tab zurückzukehren.',
        'nextButtonAriaLabel': 'Weiter-Button. Klicken Sie, um zum nächsten Tab zu gelangen.',
        'submitButtonAriaLabel': 'Formular absenden-Button. Klicken Sie, um das Formular abzusenden.',
        'reCaptchaTokenValidationError': 'ReCAPTCHA: Token-Validierungsfehler.',
        'reCaptchaTokenNotSpecifiedError': 'ReCAPTCHA: Token ist in der Übermittlung nicht angegeben.'
      }
    }
  };

  constructor(
    private formBuilderService: FormBuilderService
  ) {
  }

  ngOnInit(): void {
    Formio.setBaseUrl(location.origin);

  }

  onChangeForm(event: any): void {
    if (this.jsonElement) {
      this.jsonElement.nativeElement.innerHTML = '';
      this.jsonElement.nativeElement.appendChild(document.createTextNode(JSON.stringify(event.form, null, 4)));
    }
  }

  saveForm(form: any): void {
    this.newFormName.markAsTouched();
    if (this.newFormName.invalid || !form?.metadata) return;
    form.name = this.newFormName.value;
    if (form.id) {
      this.formBuilderService.updateForm(form.id, form).subscribe((res) => {
        console.log(res);
      });
    } else {
      this.formBuilderService.saveForm(form).subscribe((res) => {
        console.log(res);
      });
    }
  }

  clearForm(): void {
    this.form = {
      id: null,
      metadata: { components: []},
      name: '',
    };
    if(this.jsonElement) {
      this.jsonElement.nativeElement.innerHTML = '';
    }
  }


  deleteForm(): void {
    console.log('delete form');
  }

  selectForm(form: any): void {
    this.form = form;
    this.onChangeForm(form.metadata);
  }
}
