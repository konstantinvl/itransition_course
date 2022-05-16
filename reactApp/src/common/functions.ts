import { ItemInterface } from './interfaces';

export function splitTags(tags: string) {
  if (tags) {
    return tags.split('#');
  }
}

export function splitLikes(likes: string) {
  if (likes) {
    return likes.split(',').map((id) => Number(id));
  } else return [];
}

export function checkItem(item: ItemInterface, search: string) {
  let values = Object.values(item);
  values = values.filter((value) =>
    value.toString().toLowerCase().includes(search.toLowerCase())
  );
  return !!values.length;
}
