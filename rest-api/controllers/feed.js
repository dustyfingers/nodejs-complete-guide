exports.getPosts = (req, res, next) => {
  // db magic here!

  res.status(200).json({
    data: {
      posts: [
        { title: "First Post", content: "Blah blah blah blah blah." },
        { title: "First Post", content: "Blah blah blah blah blah." },
        { title: "First Post", content: "Blah blah blah blah blah." }
      ]
    }
  });
};

exports.createPost = (req, res, next) => {
  const { title, content } = req.body;
  const dateString = new Date().toISOString();

  // db magic here!

  res.status(201).json({
    data: {
      message: "Post created successfully.",
      post: { id: dateString, title, content }
    }
  });
};
