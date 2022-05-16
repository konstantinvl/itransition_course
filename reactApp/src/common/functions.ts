import { RootState } from '../services/store/store';
import { CollectionInterface, ItemInterface } from './interfaces';

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

export function latestItems(items: ItemInterface[]) {
  return items.slice(
    items.length - 7 < 0 ? 0 : items.length - 7,
    items.length - 1
  );
}

export function biggestCollections(
  collection: CollectionInterface[],
  state: RootState
) {
  let collectionIds = collection.map((item) => item.id);
  const coll = collectionIds.map((id) =>
    state.items.items.filter((item) => item.collectionId === id)
  );

  const coll1 = coll.sort((a, b) => b.length - a.length);

  return coll1.splice(0, 3).map((items) => items[0].collectionId);
}
