export const uri = 'https://localhost:8080'

export const FETCH_EVENTS = 'FETCH_EVENTS'

export const messageTypes = [FETCH_EVENTS].reduce( ( accum, msg ) =>     
  {
    accum[ msg ] = msg;
    return accum;
  }, {}
);