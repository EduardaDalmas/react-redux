export default function person(state = [], action) {
  switch (action.type) {
    case "@person/ADD":
      return [...state, action.person];

    case "@person/REMOVE":
      return state.filter(item => item !== action.person);

    default:
      return state;
  }
}
