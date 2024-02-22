
export default class  Aliment {
  constructor(nom, photo, qte, id) {
    this._nom = ["tomate", "lait", "letue", "mousse", "champ"]
    this._qte =qte; 
    this._photo=photo.nom ; 
    this._id = Date.now() + Math.floor(Math.random() * 10); // génération d'un id unique
  }


  get id() {
    return this._id;
  }

   get nom() {
    return this._nom;
  }


  get photo (){
    return this._photo; 
  }

  get qte(){
    return this._qte ; 
  }

  set qte (nouvelleQte){
    return this._qte=nouvelleQte ; 
  }

  pourAfficher() {
    return `--> ${this._id} ${this._photo}(${this._nom} ${this._qte})`;
  }
}
