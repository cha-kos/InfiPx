## Component Hierarchy
**Root**


**Sign In Container**
- AuthForm
  - Sign In
  - Sign Up

**Page Component**
- Nav
- Feed Container

**Navigation Component**
- Home
- Search Container
- Photo Upload Form
- Log Out

**Feed Container**
- User
- Photo
  - Like
  - Comment
    + Comment Index
    + Comment Form
  - Time Posted

**Photo Detail Container**
- Photo
- User
- Comment
  + Comment Index
  + Comment Form
- Like
- Time Posted

**UserProfileContainer**
- Avatar
- Photo Index
- Follow Index
 + Follow Item
- Photo Detail Container


**EditProfileContainer**
- Edit Form
- Change Password Form

**PhotoUploadContainer**
- Photo Upload Form

## Routes

|Path   | Component   |
|-------|-------------|
| "/signup" | "SignInContainer" |
| "/signin" | "SignInContainer" |
| "/feed" | "NavigationComponent" |
| "/feed" | "PhotoFeedContainer" |
| "/profile/:userId" | "UserProfileContainer" |
| "/profile/:userId" | "PhotoItemContainer" |
| "/profile/:userId/photos/:photoId" | "PhotoDetailContainer" |
| "/profile/:userId/editProfile" | "EditProfileContainer" |
| "/profile/:userId/editPassword" | "EditPasswordContainer" |
| "/upload" | "PhotoUploadContainer" |
