# ModernApp

Questa WebApp è stata sviluppata con [ExtJS7](https://www.sencha.com/products/extjs/) (framework *modern*) durante il corso **Ext JS 7 Essential Training**.

## Installazione

Per installare e testare il software è necessario scompattare l'archivio in un workspace contenente l'SDK in versione 7.x.

```bash
# Genera un workspace
sencha generate workspace myworkspace
# Spostarsi sul workspace
cd myworkspace
# Aggiunge il framework
sencha framework add /path/ext-7 ext7
# Clonare il repository
git clone <repository_url>

```

## Informazioni

Questo esempio presenta diverse tecniche che permettono di ridurre la quantità di codice da scrivere e di aumentarne la leggibilità.

### Async/await

Una delle innovazioni più interessanti delle ultime versioni di JavaScript è il supporto delle keyword `async/await`. Tramite questi comandi è possibile rimuovere del tutto le callback. Purtroppo con ExtJS è possibile usarle solo tramite la classe `Ext.Ajax`. Nei sorgenti di questo esempio si trovano degli *override* che permettono di usare async/awat anche con `Ext.data.Model` e `Ext.data.Store`. 

```javascript
    // Esempio di implementazione del metodo Model.load tramite promise
    asyncLoad(options) {
        let me = this;
        return new Ext.Promise(function (resolve, reject) {
            me.load(Ext.apply(options || {}, {
                callback(record, operation, success) {
                    if (success) {
                        resolve(record);
                    } else {
                        reject(operation);
                    }
                }
            }));
        });        
    },
```

### Modelli

Nel due modelli presentati `ModernApp.model.Person` e `ModernApp.model.Session` viene mostrato come usare i modelli come accentratori di tutti i processi legati ai dati del programma.

```javascript
Ext.define('ModernApp.model.Person', {
    extend: 'ModernApp.model.Base',

    idProperty: 'nome',

    fields: ['nome', 'cognome', 'indirizzo'],

    // Metodi che agiscono su una singola istanza del modello
    deleteRecord() {
        ...
    },
    ...

    // Metodi non legati ad una istanza specifica del modello
    statics: {
        getPerson() {
            ...
        }
    }
}
```

Inoltre, grazie all'utilizzo della classe `Ext.data.Schema`, i *proxy* vengono inserito direttamente nel modello rendendo superflua la definizione di *store* personalizzati.

### Navigazione tra le pagine

La navigazione tra le pagine viene gestita tramite la funzione globale `ModernApp.getApplication().showView(xtype, params, append)`. Questa funzione usa i seguenti parametri:

- xtype: indica l'xtype della view da aprire
- params: un oggetto con i parametri da passare alla view
- append: se *true* la view viene aggiunta al card layout, mentre di default la view va a sostituire quella precedente.

### Login

La pagina di login viene gestita come tutte le altre. La differenza è che il pulsante per l'apertura del menù principale dell'applicazione è disabilitato fino all'avvenuto login.

