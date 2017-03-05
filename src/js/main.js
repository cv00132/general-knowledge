import $ from 'jquery';
import { Board } from './Board';
import { Player } from './Player';
import { Questions } from './Questions';
import { getQuestions, sortData } from './jservice-ajax';


getQuestions().then(sortData);
