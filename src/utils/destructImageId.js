
export default (imageIds) => {
  const image_ids = []
console.log('imageIds', imageIds)

  const ids = imageIds
  .filter((items) => items.public_id != undefined)
  .map((items) => items.public_id )
  console.log('ids', ids)

  return image_ids
}