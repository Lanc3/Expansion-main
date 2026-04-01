import { useState } from 'react'

import { useForm } from 'react-hook-form'
import { Link, routes } from '@redwoodjs/router'
import humanizeString from 'humanize-string'

import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  TextAreaField,
  CheckboxField,
  Submit,
  SelectField,
} from '@redwoodjs/forms'

import ResearchMarkdown from 'src/components/ResearchMarkdown/ResearchMarkdown'

const tagsToString = (tags) =>
  Array.isArray(tags) ? tags.join(', ') : ''

const parseTags = (s) =>
  s
    ? s
        .split(',')
        .map((t) => t.trim())
        .filter(Boolean)
    : []

const suggestSlug = (title) => {
  if (!title) {
    return ''
  }
  return humanizeString(title)
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 120)
}

const ResearchArticleForm = (props) => {
  const [tab, setTab] = useState('edit')
  const isEdit = Boolean(props.post?.id)

  const formMethods = useForm({
    defaultValues: {
      title: props.post?.title || '',
      slug: props.post?.slug || '',
      body: props.post?.body || '',
      excerpt: props.post?.excerpt || '',
      tags: tagsToString(props.post?.tags),
      Image: props.post?.Image || '',
      seoTitle: props.post?.seoTitle || '',
      seoDescription: props.post?.seoDescription || '',
      authorName: props.post?.authorName || '',
      published: props.post?.published ?? false,
      publishedAt: props.post?.publishedAt
        ? new Date(props.post.publishedAt).toISOString().slice(0, 16)
        : '',
      featured: props.post?.featured ?? false,
      contentFormat: props.post?.contentFormat || 'markdown',
    },
  })

  const titleWatch = formMethods.watch('title')
  const slugWatch = formMethods.watch('slug')
  const bodyWatch = formMethods.watch('body')
  const formatWatch = formMethods.watch('contentFormat')

  const onFillSlugFromTitle = () => {
    const s = suggestSlug(titleWatch)
    if (s) {
      formMethods.setValue('slug', s)
    }
  }

  const onSubmit = (data) => {
    const input = {
      title: data.title,
      slug: data.slug || undefined,
      body: data.body,
      excerpt: data.excerpt || undefined,
      tags: parseTags(data.tags),
      Image: data.Image || undefined,
      seoTitle: data.seoTitle || undefined,
      seoDescription: data.seoDescription || undefined,
      authorName: data.authorName || undefined,
      published: data.published,
      publishedAt: data.published && data.publishedAt
        ? new Date(data.publishedAt).toISOString()
        : undefined,
      featured: data.featured,
      contentFormat: data.contentFormat || 'markdown',
      likeAmount: props.post?.likeAmount ?? 0,
    }
    props.onSave(input, props.post?.id)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2 border-b border-white/10 pb-4">
        <button
          type="button"
          onClick={() => setTab('edit')}
          className={`min-h-[44px] rounded-lg px-4 font-mono text-sm ${
            tab === 'edit'
              ? 'bg-neon-primary/20 text-neon-primary'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          Edit
        </button>
        <button
          type="button"
          onClick={() => setTab('preview')}
          className={`min-h-[44px] rounded-lg px-4 font-mono text-sm ${
            tab === 'preview'
              ? 'bg-neon-primary/20 text-neon-primary'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          Preview
        </button>
        {isEdit && slugWatch && (
          <Link
            to={`${routes.researchArticle({ slug: slugWatch })}?draft=1`}
            className="ml-auto inline-flex min-h-[44px] items-center rounded-lg border border-white/20 px-4 font-mono text-sm text-gray-300 hover:border-neon-primary/50 hover:text-neon-primary"
          >
            Open draft preview
          </Link>
        )}
      </div>

      {tab === 'preview' ? (
        <div className="rounded-xl border border-glass-border bg-black/20 p-6">
          <ResearchMarkdown
            content={bodyWatch || ''}
            contentFormat={formatWatch}
          />
        </div>
      ) : null}

      {tab === 'edit' ? (
        <Form
          formMethods={formMethods}
          onSubmit={onSubmit}
          error={props.error}
        >
          <FormError
            error={props.error}
            wrapperClassName="rw-form-error-wrapper"
            titleClassName="rw-form-error-title"
            listClassName="rw-form-error-list"
          />

          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <Label name="title" className="rw-label">
                Title
              </Label>
              <TextField
                name="title"
                className="rw-input"
                validation={{ required: true }}
              />
              <FieldError name="title" className="rw-field-error" />
            </div>
            <div>
              <div className="mb-1 flex items-center justify-between gap-2">
                <Label name="slug" className="rw-label mb-0">
                  Slug
                </Label>
                <button
                  type="button"
                  onClick={onFillSlugFromTitle}
                  className="font-mono text-xs text-neon-primary hover:underline"
                >
                  Generate from title
                </button>
              </div>
              <TextField
                name="slug"
                className="rw-input font-mono text-sm"
                placeholder="my-article-slug"
              />
              <FieldError name="slug" className="rw-field-error" />
            </div>
          </div>

          <div>
            <Label name="excerpt" className="rw-label">
              Excerpt
            </Label>
            <TextAreaField name="excerpt" className="rw-input" rows={3} />
          </div>

          <div>
            <Label name="body" className="rw-label">
              Body (Markdown)
            </Label>
            <TextAreaField
              name="body"
              className="rw-input font-mono text-sm"
              rows={18}
              validation={{ required: true }}
            />
            <FieldError name="body" className="rw-field-error" />
          </div>

          <div>
            <Label name="tags" className="rw-label">
              Tags (comma-separated)
            </Label>
            <TextField
              name="tags"
              className="rw-input"
              placeholder="llm, automation, agents"
            />
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <Label name="Image" className="rw-label">
                Cover image URL
              </Label>
              <TextField name="Image" className="rw-input" />
            </div>
            <div>
              <Label name="authorName" className="rw-label">
                Author display name
              </Label>
              <TextField name="authorName" className="rw-input" />
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <Label name="seoTitle" className="rw-label">
                SEO title override
              </Label>
              <TextField name="seoTitle" className="rw-input" />
            </div>
            <div>
              <Label name="seoDescription" className="rw-label">
                SEO description
              </Label>
              <TextAreaField name="seoDescription" className="rw-input" rows={3} />
            </div>
          </div>

          <div>
            <Label name="contentFormat" className="rw-label">
              Content format
            </Label>
            <SelectField name="contentFormat" className="rw-input">
              <option value="markdown">Markdown</option>
              <option value="legacy_plain">Legacy plain text</option>
            </SelectField>
          </div>

          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-2">
              <CheckboxField name="published" />
              <Label name="published" className="rw-label mb-0">
                Published
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <CheckboxField name="featured" />
              <Label name="featured" className="rw-label mb-0">
                Featured (single)
              </Label>
            </div>
          </div>

          <div>
            <Label name="publishedAt" className="rw-label">
              Published date (optional, local)
            </Label>
            <TextField name="publishedAt" type="datetime-local" className="rw-input" />
          </div>

          <div className="rw-button-group pt-4">
            <Submit
              disabled={props.loading}
              className="rw-button rw-button-blue"
            >
              Save
            </Submit>
          </div>
        </Form>
      ) : null}
    </div>
  )
}

export default ResearchArticleForm
