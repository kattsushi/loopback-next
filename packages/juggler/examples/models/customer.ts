import {model} from '../../lib/decorator';
import {Entity, ModelProperty} from '../../lib/model';

@model(require('./customer.definition'))
class Customer extends Entity {

}