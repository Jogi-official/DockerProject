import { Chords } from "../chords.model";

export class OpenChordService {
 private  openChord : Chords[] = [
    new Chords('G Major Chord' , "Desc" , "https://guitar.com/wp-content/uploads/2021/07/G-Major-Chord-Clinic-3@1400x1050.jpg"),
    new Chords('A Major Chord' , "Desc" , "https://guitar.com/wp-content/uploads/2021/11/A-Maj-Chord-Clinic-1@1400x1250.jpg"),
    new Chords('B7 Chord' , "Desc" , "https://www.guitartabsexplorer.com/images/chords/all-versions/b7-x_2_1_2_0_2.png"),
    new Chords('E Major Chord' , "Desc" , "https://guitar.com/wp-content/uploads/2021/10/E-Major-Chord-Clinic-1@1000x907.jpg"),
    new Chords('D Major Chord' , "Desc" , "https://guitar.com/wp-content/uploads/2021/08/D-Chord-Clinic-D@1400x1050.jpg"),
    new Chords('C Major Chord' , "Desc" , "https://fretboardknowledge.com/guitar/wp-content/uploads/sites/5/2019/04/C.png")

 ];



getChords(){
  return this.openChord.slice();
}

getChord(index : number){
  return this.openChord[index];
}


}
