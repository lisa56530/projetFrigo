
export default class  Aliment {
  constructor(id, nom, qte, photo) {
    this._nom = nom;
    this._qte =qte; 
    this._photo=photo; 
    this._id = id; // génération d'un id unique
  }


  get id() {
    return this._id;
  }

   get nom() {
    return this._nom;
  }


  get photo(){
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
