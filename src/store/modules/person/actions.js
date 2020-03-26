export function addToPerson(person) {
  return {
    type: "@person/ADD",
    person,
  };
}

export function removeFromPerson(person) {
  return {
    type: "@person/REMOVE",
    person,
  };
}
