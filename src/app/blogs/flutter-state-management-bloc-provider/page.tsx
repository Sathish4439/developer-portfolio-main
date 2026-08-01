import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Flutter State Management: BLoC vs Provider | Sathish G",
  description:
    "An architectural guide comparing BLoC and Provider in production Flutter applications. Learn when to use event-driven reactive state vs pragmatic dependency injection.",
  alternates: {
    canonical: "https://www.sathishdev.in/blogs/flutter-state-management-bloc-provider",
  },
  openGraph: {
    title: "Flutter State Management: BLoC vs Provider | Sathish G",
    description: "Production guide comparing BLoC and Provider patterns in Flutter mobile apps.",
    url: "https://www.sathishdev.in/blogs/flutter-state-management-bloc-provider",
  },
};

export default function FlutterStateManagementBlog() {
  return (
    <main className={`${styles.wrapper} fadeIn`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Flutter State Management: BLoC vs Provider Architectural Comparison",
            "description": "Architectural breakdown comparing BLoC and Provider state management in Flutter.",
            "author": {
              "@type": "Person",
              "name": "Sathish G",
              "url": "https://www.sathishdev.in"
            },
            "publisher": {
              "@type": "Person",
              "name": "Sathish G",
              "url": "https://www.sathishdev.in"
            },
            "datePublished": "2026-08-01",
            "url": "https://www.sathishdev.in/blogs/flutter-state-management-bloc-provider"
          })
        }}
      />

      <div className={styles.container}>
        <div className={styles.backLinkWrap}>
          <Link href="/blogs" className={styles.backLink}>
            <span className={styles.backIcon}>&larr;</span>
            <span className={styles.backText}>Back to Blogs</span>
          </Link>
        </div>

        <div className={styles.badge}>FLUTTER ARCHITECTURE</div>
        <h1 className={styles.title}>FLUTTER STATE MANAGEMENT: BLOC VS PROVIDER</h1>

        <div className={styles.metaRow}>
          <span>Published: Aug 2026</span>
          <span>•</span>
          <span>7 min read</span>
          <span>•</span>
          <span>By Sathish G</span>
        </div>

        <article className={styles.articleBody}>
          <p>
            State management remains the most critical decision when architecting cross-platform Flutter applications. Choosing between BLoC (Business Logic Component) and Provider often dictates your app&apos;s maintainability, testability, and team velocity.
          </p>

          <h2>1. When to Use Provider</h2>
          <p>
            Provider is ideal for small-to-medium Flutter applications or localized UI state management. Built on top of <code>InheritedWidget</code>, Provider offers low boilerplate and straightforward dependency injection:
          </p>
          <pre>{`class CartNotifier extends ChangeNotifier {
  final List<CartItem> _items = [];
  List<CartItem> get items => List.unmodifiable(_items);

  void addItem(CartItem item) {
    _items.add(item);
    notifyListeners();
  }
}`}</pre>

          <h2>2. When to Upgrade to BLoC</h2>
          <p>
            For enterprise apps (such as multi-app delivery ecosystems or banking tools), BLoC provides strict separation between Events, States, and UI widgets. Every user interaction triggers an explicit Event, ensuring predictable state transitions:
          </p>
          <pre>{`abstract class AuthEvent {}
class LoginRequested extends AuthEvent {
  final String email;
  final String password;
  LoginRequested(this.email, this.password);
}

class AuthBloc extends Bloc<AuthEvent, AuthState> {
  AuthBloc(this.authRepository) : super(AuthInitial()) {
    on<LoginRequested>((event, emit) async {
      emit(AuthLoading());
      try {
        final user = await authRepository.login(event.email, event.password);
        emit(AuthSuccess(user));
      } catch (e) {
        emit(AuthFailure(e.toString()));
      }
    });
  }
}`}</pre>

          <h2>3. Summary &amp; Recommendation</h2>
          <p>
            Use <strong>Provider</strong> for simple UI toggles, theme settings, and quick prototypes. Use <strong>BLoC / HydratedBLoC</strong> for complex domain logic, offline-first syncing, and apps requiring 100% unit test coverage of business logic.
          </p>
        </article>
      </div>
    </main>
  );
}
