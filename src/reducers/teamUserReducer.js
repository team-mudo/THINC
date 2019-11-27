export default function(state = [], action) {
  switch (action.type) {
    case GETTEAMUSER:
      return action.payload;
    case INVITEUSER:
      return [...state, action.payload];
    case OUTUSER:
      return action.payload;
    default:
      return state;
  }
}
