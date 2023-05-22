import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {RoleService} from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';

import {EvenementDto} from '../model/Evenement.model';
import {EvenementCriteria} from '../criteria/EvenementCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EvenementService extends AbstractService<EvenementDto, EvenementCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/evenement/');
    }

    public findBySalleBlockOperatoirReference(reference: string): Observable<Array<EvenementDto>>{
        return this.http.get<Array<EvenementDto>>(this.API + 'bloc-operatoir/reference/' + reference)
    }

    public constrcutDto(): EvenementDto {
        return new EvenementDto();
    }

    public constrcutCriteria(): EvenementCriteria {
        return new EvenementCriteria();
    }
}
