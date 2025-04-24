import React from 'react'

function AddBlog(){
    return (
        <form action="/" method="post">
            <label>
                Title
                <input type="text" name="title" required />
            </label>
            <label>
                Sub-Heading
                <input type="text" name="subHeading" />  // Changed 'sub-heading' to 'subHeading' for consistency
            </label>
            <label>
                Content
                <textarea name="content" required></textarea> {/* Added the 'name' attribute */}
            </label>
            <label>
                Tags
                <input type="text" name="tags" />
            </label>
            <label for="featuredImage">Featured Image:</label>
            <input type="file" id="featuredImage" name="featuredImage" accept="image/*" />
        </form>
    );
}

export default AddBlog
