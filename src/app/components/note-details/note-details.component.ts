import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from 'src/app/_services/note.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Note } from 'src/app/_models/note.model';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.css']
})
export class NoteDetailsComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentNote: Note = {
      note_date: '',
      student_name: '',
      student_group: '',
      teacher_name: '',
      activity_description: '',
      mark_or_score: '',
      comments: '',
  };

  message = '';

  constructor(
    private noteService: NoteService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getNote(this.route.snapshot.params["id"]);
    }
  }

  getNote(id: string): void {
    this.noteService.get(id)
      .subscribe({
        next: (data) => {
          this.currentNote = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updateNote(): void {
    this.message = '';
    if (confirm('Are you sure you want to perform this operation ?') == true) {
      this.noteService.update(this.currentNote.id, this.currentNote)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This Note was updated successfully!';
        },
        error: (e) => console.error(e)
      });
    }
  }

  deleteNote(): void {
    if (confirm('Are you sure you want to perform this operation ?') == true) {
      this.noteService.delete(this.currentNote.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This Note was deleted successfully!';
        },
        error: (e) => console.error(e)
      });
    }
  }
}
