class CreateArticles < ActiveRecord::Migration[5.0]
  def change
    create_table :articles do |t|
      t.integer :author_id, null: false
      t.string :title, null: false
      t.text :article, null: false
      t.string :thumbnail_url, null: false
      t.string :image_url, null: false
      t.timestamps
    end
  end
end
