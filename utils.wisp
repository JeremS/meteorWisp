(defmacro var [name value]
  `(def ^:private ~name ~value))

(defmacro defun [& body]
  `(defn- ~@body))

(def ^:private titi 1)

(var toto 1)

(defun inc [x]
  (+ 1 x))