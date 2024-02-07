export function getRelatedPosts(allPosts, currentSlug, currentCats) {

    const randomLot = (array, num) => {
        let newArray = [];

        while (newArray.length < num && array.length > 0) {
            const randomIndex = Math.floor(Math.random() * array.length);
            newArray.push(array[randomIndex])
            array.splice(randomIndex, 1)
        }

        return newArray;
    }


    const relatedPosts = allPosts.filter(
        post =>
            post.frontmatter.slug !== currentSlug &&
            post.frontmatter.categories.includes(currentCats[0])
    )

    return randomLot(relatedPosts, 4)
}


