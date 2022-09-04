import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/_models/note.model';
import { NoteService } from 'src/app/_services/note.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {

  note: Note = {
    id: '',
    note_date: '',
    student_name: '',
    student_group: '',
    teacher_name: '',
    activity_description: '',
    mark_or_score: '',
    comments: '',
  };

  submitted = false;

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
  }

  saveNote(): void {
    const data = {
      note_date: this.note.note_date,
      student_name: this.note.student_name,
      student_group: this.note.student_group,
      teacher_name: this.note.teacher_name,
      activity_description: this.note.activity_description,
      mark_or_score: this.note.mark_or_score,
      comments: this.note.comments,
    };

    this.noteService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newNote(): void {
    this.submitted = false;
    this.note = {
      note_date: '',
      student_name: '',
      student_group: '',
      teacher_name: '',
      activity_description: '',
      mark_or_score: '',
      comments: ''
    };
  }

}
