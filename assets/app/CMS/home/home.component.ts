import {Component, Inject, OnInit} from "@angular/core";
import {Quote} from "./quote.model";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from "@angular/material";
import {QuotesService} from "./quote.service";

@Component({
    selector: 'cms-home',
    styleUrls: ['./home.component.css'],
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit{

    quotes: Quote[] = [];

    constructor(
        private quoteService: QuotesService,
        public dialog: MatDialog) {}

    ngOnInit(): void {
        this._getAll();
    }

    private _getAll():void {
        this.quoteService
            .getAll()
            .subscribe((quotes) => {
                this.quotes = quotes;
            });
    }

    /*

     */
    createQuote(){
        let quote = new Quote(null,  "", false);
        let dialogRef = this.dialog.open(EditQuoteDialog, {data:quote, disableClose: true, width: '400px', height: '200px'});
        dialogRef.afterClosed().subscribe(result => {
            if (result)
                this.save(result);
        });
    }

    /*

     */
    editItem(quote:Quote){

        let dialogRef = this.dialog.open(EditQuoteDialog, {data:quote, disableClose: true, width: '400px', height: '200px'});
        dialogRef.afterClosed().subscribe(result => {
            if (result)
                this.update(result);
        });
    }

    /*

     */
    deleteItem(quote: Quote){
        let dialogRef = this.dialog.open(DeleteQuoteDialog, {data:quote, disableClose: true,});
        dialogRef.afterClosed().subscribe(result => {
            if (result)
                this.delete(result);
        });
    }

    /*

     */
    changeEnabled(quote:Quote, enabled: boolean){

        quote.enabled = enabled;
        this.update(quote);
    }

    /*

     */
    save( quote: Quote ){
        this.quoteService
            .add(quote)
            .subscribe(
                (data) => {
                    console.log(data);
                },
                (err) => {
                    console.error(err);
                }
            );
    }

    /*

     */
    update( quote: Quote){
        this.quoteService
            .update(quote)
            .subscribe(
                (data) => {
                    // this.filterQuotes();
                },
                (err) => {
                    console.error(err);
                }
            )
    }

    /*

     */
    delete(quote:Quote){
        this.quoteService
            .delete(quote)
            .subscribe(
                (data) => {
                    // this.filterQuotes();
                },
                (err) => {
                    console.error(err);
                }
            )
    }
}

/*

 EDIT ARTIST DIALOG

 */
@Component({
    selector: 'edit-quote-dialog',
    templateUrl: './edit.quote.modal.component.html',
    styles: [
            `
            .quote-container{
                width: 420px;
            }

            .full-width {
                width: 100%;
            }
        `
    ]
})
export class EditQuoteDialog {

    private clonedQuote: Quote;

    constructor(public dialogRef: MatDialogRef<EditQuoteDialog>,
                @Inject(MAT_DIALOG_DATA) public data: Quote) {
        this.clonedQuote = data.clone();
    }


    onCancel(){
        this.data.reset(this.clonedQuote);
        this.dialogRef.close();
    }

    onSubmit(){
        this.dialogRef.close(this.data);
    }
}

/*

 DELETE ARTIST DIALOG

 */


@Component({
    selector: 'delete-quote-dialog',
    templateUrl: './confirm.delete.quote.component.html',
    styles: [
            `
            .delete{
                font-size: 72px;
            }

            button{
                margin:12px;
            }
        `
    ]
})
export class DeleteQuoteDialog {
    constructor(public dialogRef: MatDialogRef<DeleteQuoteDialog>,
                @Inject(MAT_DIALOG_DATA) public data: Quote) {}

    onDecline(){
        this.dialogRef.close();
    }

    onAccept(){
        this.dialogRef.close(this.data);
    }
}