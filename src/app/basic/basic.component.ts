import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "basic",
  templateUrl: "./basic.component.html",
  styleUrls: ["./basic.component.scss"]
})
export class BasicComponent implements OnInit {
  @Input() message: string;
  constructor() {}

  ngOnInit() {}
}
