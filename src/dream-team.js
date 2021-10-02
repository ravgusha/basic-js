import {
  NotImplementedError
} from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  if (Array.isArray(members)) {
    let array0 = members.filter(e => typeof e === 'string' && e !== '');
    let array1 = array0.map(function (x) {
      return x.toUpperCase().replace(/ /g, '')
    });
    let array2 = array1.sort((a, b) => a.localeCompare(b));
    let array3 = array2.map((member) => member[0]).join('');

    return array3;
  } else
    return false;
}

