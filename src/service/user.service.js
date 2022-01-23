function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }
  
  export async function login(user, pwd) {
    await delay(2000)
    if (user === "i" && pwd === "i") {
      return { loggedIn: true, lastName: "Smith", firstName: "Will" }
    } else {
      throw new Error()
    }
  }