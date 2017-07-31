import { ContactUsFormComponent } from './../../header/contact-us-form/contact-us-form.component';
import { Injectable } from '@angular/core';
import { Headers, Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

import { TelsatInfo } from "app/classes/telsat-info";
import { Button } from "app/classes/button";
import { Project } from "app/classes/project";
import { Client } from "app/classes/client";
import { AboutUs } from "app/classes/about-us";
import { ImageInfo } from "app/classes/imageInfo";
import { Sector } from "app/classes/sector";


@Injectable()
export class ServicesTelsat {  
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor( 
    private http: Http
  ) { }

  getCompanyInfo(): Observable <TelsatInfo> {
    const url = 'api/footer'
    return this.http.get( url )
        .map(res => {
          if(res.status === 500){
            let err = res.json()
            console.log(err)
            throw Observable.throw(err)
          }
          let doc =  res.json()[0]
          return new TelsatInfo({
            address: doc.address,
            contact: doc.contact,
            workHours: doc.workHours,
            companyName: doc.companyName,
            copyRight: doc.copyRight 
          })
        })
        .catch(err => {
          console.log(err)
          return Observable.of<TelsatInfo>()
        })
  }

  getButtons(): Observable<Button[]> {
    const url = 'api/headerBtn'
    return this.http.get( url )
        .map(res => {
            if(res.status === 500){
              let err = res.json()
              console.log(err)
              throw Observable.throw(err)
           }
            return res.json()
              .map( el => new Button({ text: el.text, link: el.link, img: el.img, msg: el.msg }))
          }
        )
        .catch(err => {
          alert("Error de comunicación, Code: 06")
          return Observable.of<Button[]>()
        })
  }

  getProjects(): Observable <Project[]> {
    const url = 'api/projects'
    return this.http.get(url)
        .map(res => {
          if(res.status === 500){
            let err = res.json()
            console.log(err)
            throw Observable.throw(err)
          }
          return res.json().map( el => new Project({ img: el.img, title: el.title, desc: el.desc }))
        } )
        .catch(err => {
          alert("Error de comunicación, Code: 13")
          return Observable.of<Project[]>()
        })
  }

  getTechDivisions(): Observable <Project[]> {
    const url = 'api/techDivisions'
    return this.http.get(url)
        .map(res => {
          if(res.status === 500){
            let err = res.json()
            console.log(err)
            throw Observable.throw(err)
          }
          return res.json().map(el => new Project({ img: el.img, title: el.title, desc: el.desc }))
        } )
        .catch( err => {
          alert("Error de comunicacion, code: 01")
          return Observable.of<Project[]>()
        })
  }

  getClient(): Observable <Client[]> {
      const url = 'api/clients'
      return this.http.get(url)
          .map( res => {
            if(res.status === 500){
              let err = res.json()
              console.log(err)
              throw Observable.throw(err)
            }
            return res.json().map(el => new Client({ company: el.company, link: el.link, size: { x:'200', y:'200' } }))
          } )
          .catch( err => {
            alert('Error de comunicacion, code: 06')
            return Observable.of<Client[]>()
          } )
  }

  getProvider(): Observable <Client[]> {
    const url = 'api/providers'
    return this.http.get(url)
        .map( res => {
          if(res.status === 500){
            let err = res.json()
            console.log(err)
            throw Observable.throw(err)
          }
          return res.json().map( el => new Client({ company: el.company, link: el.link, size: { x:'200', y:'200' } }) )
        } )
        .catch( err => {
          alert('Error de comunicacion, code: 07')
          return Observable.of<Client[]>()
        })
  }

  getAboutUs(): Observable<any> {
    const url = 'api/aboutUs'
    return this.http.get(url)
        .map( res => {
          //Mejor separar todo aqui para no tener q hacer peticiones diferentes, todos van para el mismo componente
          if(res.status === 500){
            let err = res.json()
            console.log(err)
            throw Observable.throw(err)
          }
          const auxMision = res.json().filter( el => el.tipo === 'mision')[0]
          const auxVision = res.json().filter( el => el.tipo === 'vision')[0]
          const auxPhilos = res.json().filter( el => el.tipo === 'filosofia')[0]
          const auxOrg = res.json().filter( el => el.tipo === 'organigrama')[0]
          const auxValue = res.json().filter( el => el.tipo === 'valor')

          const mision = new AboutUs({ title: auxMision.title, info: auxMision.info })
          const vision = new AboutUs({ title: auxVision.title, info: auxVision.info })
          const philos = new ImageInfo({ img: auxPhilos.img, title: auxPhilos.title })
          const orgChart = new ImageInfo({ img: auxOrg.img, title: auxOrg.title })
          const values = auxValue.map(el => new AboutUs({ title: el.title, info: el.info }))
          return {mision, vision, philos, orgChart, values}
        } )
        .catch( err => {
          alert('Error de comunicacion, code: 02')
          return Observable.of<any[]>()
        } )
  }

  getSectors(parent: string): Observable<Sector[]> {
    const url = 'api/sectors'
    return this.http.post(url, JSON.stringify({'parent': parent}), {headers: this.headers})
        .map( res => {
          if(res.status === 500){
            let err = res.json()
            console.log(err)
            throw Observable.throw(err)
          }
          return res.json()
            .map(el => new Sector(
              { 
                id: el.id,
                caption: el.caption,
                parent: el.parent,
                children: el.children,
                image: el.image 
              })
            )
        })
        .catch( err => {
          alert('Error de comunicacion, code: 12')
          return Observable.of<Sector[]>()
        })
  }

  getParent(parentId: string): Observable<Sector[]> {
    const url = 'api/sectorsUncles'
    return this.http.post(url, JSON.stringify({parent: parentId}), {headers: this.headers})
        .map(res => {
          if(res.status === 500){
            let err = res.json()
            console.log(err)
            throw Observable.throw(err)
          }
          return res.json()
            .map(el => new Sector({
                id: el.id,
                caption: el.caption,
                parent: el.parent,
                children: el.children,
                image: el.image
              })
            )
        })
        .catch(err => {
          alert('Erro de comunicacion, code 11')
          return Observable.of<Sector[]>()
        })
  }
  
}