

(defmacro var [name value]
  `(let [ast (Npm.require "wisp/ast.js")
         wm (.-with-meta ast)]
     (def (wm ~name {:private true}) ~value)))

(defmacro defun [& body]
  `(defn- ~@body))

(def ^:private titi 1)

(var toto 1)

(defun inc [x]
  (+ 1 x))