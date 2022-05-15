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
