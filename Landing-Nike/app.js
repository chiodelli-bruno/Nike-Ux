// Header scroll effect
const header = document.querySelector(".header")
const mobileToggle = document.querySelector(".mobile-toggle")
const navMobile = document.querySelector(".nav-mobile")
const body = document.body

// Create overlay element
const overlay = document.createElement("div")
overlay.classList.add("overlay")
document.body.appendChild(overlay)

// Header scroll effect
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled")
  } else {
    header.classList.remove("scrolled")
  }
})

// Mobile menu toggle
mobileToggle.addEventListener("click", () => {
  mobileToggle.classList.toggle("active")
  navMobile.classList.toggle("active")
  overlay.classList.toggle("active")
  body.classList.toggle("no-scroll")
})

// Close mobile menu when clicking on overlay
overlay.addEventListener("click", () => {
  mobileToggle.classList.remove("active")
  navMobile.classList.remove("active")
  overlay.classList.remove("active")
  body.classList.remove("no-scroll")
})

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-mobile .nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    mobileToggle.classList.remove("active")
    navMobile.classList.remove("active")
    overlay.classList.remove("active")
    body.classList.remove("no-scroll")
  })
})

// Active link highlighting
const sections = document.querySelectorAll("section[id]")
const navLinks = document.querySelectorAll(".nav-link")

function highlightNavLink() {
  const scrollY = window.pageYOffset

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight
    const sectionTop = section.offsetTop - 100
    const sectionId = section.getAttribute("id")

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelectorAll(`.nav-link[href*="${sectionId}"]`).forEach((link) => {
        link.classList.add("active")
      })
    } else {
      document.querySelectorAll(`.nav-link[href*="${sectionId}"]`).forEach((link) => {
        link.classList.remove("active")
      })
    }
  })

  // If we're at the top of the page, highlight Home
  if (scrollY < 100) {
    document.querySelectorAll('.nav-link[href="#"]').forEach((link) => {
      link.classList.add("active")
    })
  }
}

window.addEventListener("scroll", highlightNavLink)
window.addEventListener("load", highlightNavLink)

// Carousel functionality
const prevBtn = document.getElementById("prev")
const nextBtn = document.getElementById("next")
const carousel = document.querySelector(".carousel")
const items = carousel.querySelectorAll(".list .item")
const indicator = carousel.querySelector(".indicators")
const dots = indicator.querySelectorAll(".indicators ul li")

let active = 0
const firstPosition = 0
const lastPosition = items.length - 1
let autoPlay

const startAutoPlay = () => {
  clearInterval(autoPlay)
  autoPlay = setInterval(() => {
    nextBtn.click()
  }, 5000)
}

const setSlider = () => {
  const itemActiveOld = carousel.querySelector(".list .item.active")
  if (itemActiveOld) itemActiveOld.classList.remove("active")
  items[active].classList.add("active")

  const dotActiveOld = indicator.querySelector(".indicators ul li.active")
  if (dotActiveOld) dotActiveOld.classList.remove("active")
  dots[active].classList.add("active")

  indicator.querySelector(".number").innerText = "0" + (active + 1)
  startAutoPlay()
}

// Initialize the slider
setSlider()

// Event for next button
nextBtn.onclick = () => {
  active = active + 1 > lastPosition ? 0 : active + 1
  carousel.style.setProperty("--calculation", 1)
  setSlider()
}

// Event for previous button
prevBtn.onclick = () => {
  active = active - 1 < firstPosition ? lastPosition : active - 1
  carousel.style.setProperty("--calculation", -1)
  setSlider()
}

// Events for indicators
dots.forEach((item, position) => {
  item.onclick = () => {
    active = position
    setSlider()
  }
})

// Start autoplay when page loads
startAutoPlay()

// Products section functionality
function changeImgSrc(src, productIndex) {
  const productCards = document.querySelectorAll(".product-card")
  const shoeImg = productCards[productIndex].querySelector(".shoes")
  shoeImg.src = src
}

// Size selection functionality
document.querySelectorAll(".sizes li").forEach((size) => {
  size.addEventListener("click", function () {
    // Remove active class from all sizes in this product
    const parentSizes = this.parentElement.querySelectorAll("li")
    parentSizes.forEach((s) => s.classList.remove("active"))

    // Add active class to selected size
    this.classList.add("active")
  })
})

// Add to cart functionality
const cartCount = document.querySelector(".cart-count")
let cartItems = 0

document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault()
    const productName = this.closest(".imgBox").querySelector("h2").textContent
    const productPrice = this.closest(".imgBox").querySelector(".price").textContent
    cartItems++
    cartCount.textContent = cartItems

    // Add animation to cart icon
    const cartIcon = document.querySelector(".nav-icon .fa-shopping-cart")
    cartIcon.classList.add("pulse")
    setTimeout(() => {
      cartIcon.classList.remove("pulse")
    }, 500)

    // Create and show enhanced notification
    showCartNotification(productName, productPrice)
  })
})

// Enhanced cart notification function
function showCartNotification(productName, productPrice) {
  // Remove any existing notification
  const existingNotification = document.querySelector(".cart-notification")
  if (existingNotification) {
    existingNotification.remove()
  }

  // Create notification element
  const notification = document.createElement("div")
  notification.className = "cart-notification"
  notification.innerHTML = `
    <div class="cart-notification-icon">
      <i class="fas fa-check-circle"></i>
    </div>
    <div class="cart-notification-content">
      <h4>Added to Cart!</h4>
      <p>${productName} (${productPrice}) has been added to your cart.</p>
    </div>
    <button class="cart-notification-close">
      <i class="fas fa-times"></i>
    </button>
  `

  // Add to body
  document.body.appendChild(notification)

  // Add close button functionality
  const closeBtn = notification.querySelector(".cart-notification-close")
  closeBtn.addEventListener("click", () => {
    notification.remove()
  })

  // Auto remove after 4 seconds
  setTimeout(() => {
    if (document.body.contains(notification)) {
      notification.style.opacity = "0"
      notification.style.transform = "translateY(20px)"
      notification.style.transition = "opacity 0.3s, transform 0.3s"

      setTimeout(() => {
        if (document.body.contains(notification)) {
          notification.remove()
        }
      }, 300)
    }
  }, 4000)
}

// Testimonials carousel functionality
const testimonialWrapper = document.querySelector(".testimonial-wrapper")
const testimonialCards = document.querySelectorAll(".testimonial-card")
const prevTestimonialBtn = document.getElementById("prev-testimonial")
const nextTestimonialBtn = document.getElementById("next-testimonial")
const testimonialDots = document.querySelectorAll(".testimonial-dots .dot")
const currentSlide = document.querySelector(".testimonial-pagination .current")
const totalSlides = document.querySelector(".testimonial-pagination .total")

let activeTestimonial = 0
let testimonialAutoPlay
let isMobile = window.innerWidth < 768

// Set total slides
totalSlides.textContent = testimonialCards.length.toString().padStart(2, "0")

// Function to check if device is mobile
const checkMobile = () => {
  isMobile = window.innerWidth < 768
  scrollToTestimonial(activeTestimonial)
}

// Listen for window resize
window.addEventListener("resize", checkMobile)

const scrollToTestimonial = (index) => {
  const card = testimonialCards[index]

  // Different scroll behavior for mobile and desktop
  if (isMobile) {
    testimonialWrapper.scrollTo({
      left: card.offsetLeft - 20,
      behavior: "smooth",
    })
  } else {
    testimonialWrapper.scrollTo({
      left: card.offsetLeft - testimonialWrapper.offsetWidth / 2 + card.offsetWidth / 2,
      behavior: "smooth",
    })
  }

  // Update active dot
  testimonialDots.forEach((dot) => dot.classList.remove("active"))
  testimonialDots[index].classList.add("active")

  // Update pagination
  currentSlide.textContent = (index + 1).toString().padStart(2, "0")

  // Add active class to current card and remove from others
  testimonialCards.forEach((card, i) => {
    if (i === index) {
      card.classList.add("active-testimonial")
      // Ensure tilt effect is reset for active card
      if (typeof VanillaTilt !== "undefined" && VanillaTilt.init) {
        VanillaTilt.init(card, {
          max: 10,
          speed: 400,
          glare: true,
          "max-glare": 0.3,
          scale: 1.03,
        })
      }
    } else {
      card.classList.remove("active-testimonial")
    }
  })
}

// Initialize testimonial slider
scrollToTestimonial(0)

// Event for next testimonial button
nextTestimonialBtn.addEventListener("click", () => {
  activeTestimonial = (activeTestimonial + 1) % testimonialCards.length
  scrollToTestimonial(activeTestimonial)
})

// Event for previous testimonial button
prevTestimonialBtn.addEventListener("click", () => {
  activeTestimonial = (activeTestimonial - 1 + testimonialCards.length) % testimonialCards.length
  scrollToTestimonial(activeTestimonial)
})

// Events for testimonial dots
testimonialDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    activeTestimonial = index
    scrollToTestimonial(activeTestimonial)
  })
})

// Touch events for mobile swipe
let touchStartX = 0
let touchEndX = 0

testimonialWrapper.addEventListener(
  "touchstart",
  (e) => {
    touchStartX = e.changedTouches[0].screenX
  },
  { passive: true },
)

testimonialWrapper.addEventListener(
  "touchend",
  (e) => {
    touchEndX = e.changedTouches[0].screenX
    handleSwipe()
  },
  { passive: true },
)

const handleSwipe = () => {
  const swipeThreshold = 50 // Minimum distance for swipe

  if (touchEndX < touchStartX - swipeThreshold) {
    // Swipe left - next slide
    nextTestimonialBtn.click()
  } else if (touchEndX > touchStartX + swipeThreshold) {
    // Swipe right - previous slide
    prevTestimonialBtn.click()
  }
}

// Auto scroll testimonials
const startTestimonialAutoPlay = () => {
  clearInterval(testimonialAutoPlay)
  testimonialAutoPlay = setInterval(() => {
    nextTestimonialBtn.click()
  }, 6000)
}

startTestimonialAutoPlay()

// Pause auto scroll on hover or touch
testimonialWrapper.addEventListener("mouseenter", () => {
  clearInterval(testimonialAutoPlay)
})

testimonialWrapper.addEventListener("mouseleave", () => {
  startTestimonialAutoPlay()
})

testimonialWrapper.addEventListener(
  "touchstart",
  () => {
    clearInterval(testimonialAutoPlay)
  },
  { passive: true },
)

testimonialWrapper.addEventListener(
  "touchend",
  () => {
    startTestimonialAutoPlay()
  },
  { passive: true },
)

// Add this to the end of your CSS file
document.head.insertAdjacentHTML(
  "beforeend",
  `
<style>
.testimonial-card {
    opacity: 0.7;
    transform: scale(0.95);
    transition: opacity 0.3s ease, transform 0.3s ease;
}

.testimonial-card.active-testimonial {
    opacity: 1;
    transform: scale(1);
}

@media (max-width: 576px) {
    .testimonial-card {
        opacity: 1;
        transform: scale(1);
    }
}
</style>
`,
)

// FAQ accordion functionality
const faqItems = document.querySelectorAll(".faq-item")

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question")

  question.addEventListener("click", () => {
    // Toggle active class on the clicked item
    item.classList.toggle("active")

    // Close other items
    faqItems.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.classList.remove("active")
      }
    })
  })
})

// Contact form submission
const contactForm = document.querySelector(".contact-form")

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault()

    // Get form values
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const subject = document.getElementById("subject").value
    const message = document.getElementById("message").value

    // Simple validation
    if (!name || !email || !message) {
      alert("Please fill in all required fields.")
      return
    }

    // Here you would typically send the form data to a server
    // For demo purposes, we'll just show an alert
    alert(`Thank you, ${name}! Your message has been sent. We'll get back to you soon.`)

    // Reset form
    this.reset()
  })
}

// Newsletter form submission
const newsletterForm = document.querySelector(".newsletter-form")

if (newsletterForm) {
  newsletterForm.addEventListener("submit", function (e) {
    e.preventDefault()

    const email = this.querySelector('input[type="email"]').value

    if (!email) {
      alert("Please enter your email address.")
      return
    }

    alert(`Thank you for subscribing! You'll now receive our latest updates at ${email}.`)

    this.reset()
  })
}

// Back to top button functionality
const backToTopBtn = document.getElementById("backToTop")

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add("visible")
  } else {
    backToTopBtn.classList.remove("visible")
  }
})

backToTopBtn.addEventListener("click", (e) => {
  e.preventDefault()
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
})

// Initialize VanillaTilt for all elements with data-tilt attribute
var VanillaTilt = (() => {
  // Define VanillaTilt here or import it if it's in a separate file
  // This is a placeholder, replace with the actual VanillaTilt implementation or import
  return {
    init: (elements, options) => {
      // Placeholder for initialization logic
      console.log("VanillaTilt initialized (placeholder)")
    },
  }
})()

VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
  max: 15,
  speed: 400,
  glare: true,
  "max-glare": 0.5,
  scale: 1.05,
  perspective: 1000,
})

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()

    const targetId = this.getAttribute("href")
    if (targetId === "#") return

    const targetElement = document.querySelector(targetId)
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 70, // Adjust for header height
        behavior: "smooth",
      })
    }
  })
})

// Add this to the end of your CSS file
document.head.insertAdjacentHTML(
  "beforeend",
  `
<style>
body.no-scroll {
    overflow: hidden;
}

@keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.3); }
    100% { transform: scale(1); }
}

.pulse {
    animation: pulse 0.5s ease;
}
</style>
`,
)
