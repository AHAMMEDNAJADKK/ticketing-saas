import User from "../models/User.js";
import Organization from "../models/Organization.js";
import generateToken from "../utils/generateToken.js";

export const register = async (req, res) => {
  const { name, email, password, organizationName } = req.body;

  let org = await Organization.findOne({ name: organizationName });

  if (!org) {
    org = await Organization.create({ name: organizationName });
  }

  const user = await User.create({
    name,
    email,
    password,
    organization: org._id
  });

  res.status(201).json({
    _id: user._id,
    name: user.name,
    token: generateToken(user._id)
  });
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      token: generateToken(user._id)
    });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
};
