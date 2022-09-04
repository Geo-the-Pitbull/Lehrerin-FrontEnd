import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/_models/note.model';
import { NoteService } from 'src/app/_services/note.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {

  notes!: Note[];
  currentNote: Note = {};
  currentIndex = -1;
  

  student_name = '';

  message = '';

  isDisplay = false;
  isChange = true;

  page: number = 1;
  count: number = 0;
  listSize: number = 5;
  listSizes: any = [3, 5, 10, 15];

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.retrieveNotes();
  }

  toggleDisplay(){
    this.isDisplay = !this.isDisplay;
    this.isChange = !this.isChange
  }

  retrieveNotes(): void {
    this.noteService.getAll().subscribe(
       (data) => {
        this.notes = data;
        console.log(data);
      }
    );
  }

  onListDataChange(event: any) {
    this.page = event;
    this.retrieveNotes();
  }

  onListSizeChange(event: any): void {
    this.listSize = event.target.value;
    this.page = 1;
    this.retrieveNotes();
  }

  refreshListOfNotes(): void {
    this.retrieveNotes();
    this.currentNote = {};
    this.currentIndex = -1;
  }

  setActiveNote(note: Note, index: number): void {
    this.currentNote = note;
    this.currentIndex = index;
  }

  removeAllNotes(): void {
    this.noteService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'All Notes were deleted successfully!';
          this.refreshListOfNotes();
        },
        error: (e) => console.error(e)
      });
  }

  searchNotes(): void {
    this.currentNote = {};
    this.currentIndex = -1;

    this.noteService.find_By_Student_Name(this.student_name)
      .subscribe({
        next: (data) => {
          this.notes = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
}
