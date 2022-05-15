import { Tag } from '../app';
import { TagInterface, TagModel } from './tags';

async function findTag(tag: string): Promise<false | TagModel> {
  return Tag.findOne({ where: { tag: tag } })
    .then((tag) => {
      if (!tag) return false;
      return tag;
    })
    .catch(() => {
      return false;
    });
}

export async function getAllTags() {
  const tagList = await Tag.findAll()
    .then((res) => res)
    .catch((e) => {
      throw Error(e);
    });
  return Promise.resolve<TagInterface[]>(tagList);
}

export async function setTags(tags: string) {
  tags.split('#').forEach((tag) => {
    if (!findTag(tag.toLowerCase())) {
      const newTag = Tag.create({
        tag: tag.toLowerCase(),
      }).then((res) => res);
      return Promise.resolve<TagInterface>({
        ...newTag,
      });
    }
  });
}
